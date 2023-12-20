<?php

/**
 * Interface for being able to load data from and write date to a file.
 */
interface IFileIO {
    /**
     * Saves the supplied data.
     * @param $data
     */
    function save($data);

    /**
     * Loads data.
     */
    function load();
}

/**
 * Class representing an object capable for reading and writing to IO.
 */
abstract class FileIO implements IFileIO {
    /**
     * @var string Path of the file.
     */
    protected string $filepath;

    /**
     * Constructor.
     * @throws Exception if the given file doesn't exist or is not readable and writable
     */
    public function __construct($filename) {
        if (!is_readable($filename) || !is_writable($filename)) {
            throw new Exception("Data source $filename is invalid.");
        }

        $this->filepath = realpath($filename);
    }
}

/**
 * Class capable of reading and writing to files in a JSON format.
 */
class JsonIO extends FileIO {
    /**
     * Loads the given json file.
     * @param $assoc bool should the file be decoded into an associative array.
     * @return array|mixed
     */
    public function load(bool $assoc = true): mixed {
        $file_content = file_get_contents($this->filepath);
        return json_decode($file_content, $assoc) ?? [];
    }

    /**
     * Saves the supplied data to the given file in a json format.
     * @param $data mixed data to encode.
     * @return void
     */
    public function save(mixed $data): void {
        $json_content = json_encode($data, JSON_PRETTY_PRINT);
        file_put_contents($this->filepath, $json_content);
    }
}

/**
 * Class capable of reading and writing files in PHP serialization format.
 */
class SerializeIO extends FileIO {
    /**
     * Loads the given PHP serialized file.
     * @return array
     */
    public function load(): array {
        $file_content = file_get_contents($this->filepath);
        return unserialize($file_content) ?? [];
    }

    /**
     * Saves the supplied data to the given file in a PHP serialized format.
     * @param $data mixed data to encode.
     * @return void
     */
    public function save(mixed $data): void {
        $serialized_content = serialize($data);
        file_put_contents($this->filepath, $serialized_content);
    }
}

/**
 * Interface for being able to do basic manipulation and querying of a set of stored data.
 * @template T
 */
interface IStorage {
    /**
     * Adds a given entry to the storage.
     * @param $record T entry to insert
     * @return string id assigned to the inserted entry
     */
    function add($record): string;

    /**
     * Returns a given entry from the storage.
     * @param string $id id of the entry to return
     * @return T
     */
    function findById(string $id);

    /**
     * Returns an array containing all entries.
     * @param array $params
     * @return T[]
     */
    function findAll(array $params = []): array;

    /**
     * Returns all entries that satisfy the supplied condition.
     * @param callable(T): bool $condition predicate to filter on
     * @return T[]
     */
    function findMany(callable $condition): array;

    /**
     * Returns one entry from the storage.
     * @param array $params
     * @return T
     */
    function findOne(array $params = []);

    /**
     * Overrides the entry of the given id with the supplied record.
     * @param string $id id of the entry to override
     * @param T $record entry to override with
     */
    function update(string $id, $record);

    /**
     * Updates all entries that satisfy he supplied condition.
     * @param callable(T): bool $condition predicate to base the filtering on.
     * @param callable(T): T $updater function to use for updating entries matching the predicate.
     */
    function updateMany(callable $condition, callable $updater);

    /**
     * Removes the entry with the given id from the storage.
     * @param string $id
     */
    function delete(string $id);

    /**
     * Removes all entries that satisfy the supplied condition.
     * @param callable(T): bool $condition predicate to filter on
     */
    function deleteMany(callable $condition);
}

/**
 * @template T
 * @implements IStorage<T>
 */
class Storage implements IStorage {
    /** @var T[] array of records */
    protected array $contents;

    /** @var IFileIO FileIO implementation to use for reading and writing records */
    protected IFileIO $io;

    public function __construct(IFileIO $io, $assoc = true) {
        $this->io = $io;
        $this->contents = (array)$this->io->load($assoc);
    }

    public function __destruct() {
        $this->io->save($this->contents);
    }


    /**
     * Adds a given entry to the storage.
     * @param $record T entry to insert
     * @return string id assigned to the inserted entry
     */
    public function add($record): string {
        $id = uniqid();
        if (is_array($record)) {
            $record['id'] = $id;
        } elseif (is_object($record)) {
            $record->id = $id;
        }
        $this->contents[$id] = $record;
        return $id;
    }

    /**
     * Returns a given entry from the storage.
     * @param string $id id of the entry to return
     * @return T|null the entry with the given id or null if no such entry exists
     */
    public function findById(string $id): mixed {
        return $this->contents[$id] ?? null;
    }

    /**
     * Returns an array containing all entries.
     * @param array<string|int, mixed> $params
     * @return T[]
     */
    public function findAll(array $params = []): array {
        return array_filter($this->contents, function($item) use ($params) {
            foreach ($params as $key => $value) {
                if (((array)$item)[$key] !== $value) {
                    return false;
                }
            }
            return true;
        });
    }

    /**
     * Returns all entries that satisfy the supplied condition.
     * @param callable(T): bool $condition predicate to filter on
     * @return T[]
     */
    public function findMany(callable $condition): array {
        return array_filter($this->contents, $condition);
    }

    /**
     * Returns one entry from the storage.
     * @param array<string|int, mixed> $params an array of expected field values (only if storage contains arrays)
     * @return T|null null if the storage contains no (matching) entries
     */
    public function findOne(array $params = []): mixed {
        $found_items = $this->findAll($params);
        $first_index = array_keys($found_items)[0] ?? null;
        return $found_items[$first_index] ?? null;
    }

    /**
     * Overrides the entry of the given id with the supplied record.
     * @param string $id id of the entry to override
     * @param T $record entry to override with
     * @return void
     */
    public function update(string $id, mixed $record): void {
        $this->contents[$id] = $record;
    }

    /**
     * Updates all entries that satisfy he supplied condition.
     * @param callable(T): bool $condition predicate to filter on
     * @param callable(T): T $updater function to use for updating entries matching the predicate
     * @return void
     */
    public function updateMany(callable $condition, callable $updater): void {
        array_walk($this->contents, function(&$item) use ($condition, $updater) {
            if ($condition($item)) {
                $updater($item);
            }
        });
    }

    /**
     * Removes the entry with the given id from the storage.
     * @param string $id id of the entry to delete.
     * @return void
     */
    public function delete(string $id): void {
        unset($this->contents[$id]);
    }

    /**
     * Removes all entries that satisfy the supplied condition.
     * @param callable(T): T $condition predicate to filter on
     * @return void
     */
    public function deleteMany(callable $condition): void {
        $this->contents = array_filter($this->contents, function($item) use ($condition) {
            return !$condition($item);
        });
    }
}