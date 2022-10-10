# Delegating
## Function
```js
function delegate(parent, child, when, what){
    function eventHandlerFunction(event){
        let eventTarget  = event.target
        let eventHandler = this
        let closestChild = eventTarget.closest(child)

        if(eventHandler.contains(closestChild)){
            what(event, closestChild)
        }
    }

    parent.addEventListener(when, eventHandlerFunction)
}
```

## How to delegate?
1. Find the delegate function on Thor's github
2. Insert it into your code
3. Call the function with four parameters
    - Parameter 1: Who is the main parent element of our many identical small elements?
                   This should be a specific node, so get it with some querySelector or createElement!
    - Parameter 2: Who are the small identical elements?
                   This should be a string selector, for example 'p' or '.color' or even more complex  
                   'ul li .specialisListElement table td b'
    - Parameter 3: What is the event that the parent should watch?
                   This is also a string, for example 'click', 'keyup', 'input'
    - Parameter 4: What should happen if the parent sees the event happen to a child being watched?
                   This is a two-parameter function, the first parameter of which is an event, the second parameter is the child with whom the event happened.

    - For example, the event is that a teacher told a child to ask their parents to come in for a talk:
    
    ````JS
    visitTheTeacher(event, child){
        talkToTheTeacher(event.teacherWhoCalledIn);
        talkToTheChild(child);
    }
    delegate(mother, '.gradeSchoolStudent', 'askForParentToComeIn', visitTheTeacher);
    ````