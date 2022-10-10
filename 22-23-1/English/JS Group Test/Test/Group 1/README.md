# JS Group Test - 10.10.
## Lore
The Javascroman Empire is an elective monarchy, and conveniently for you, it's just about election day. You were assigned the task of predicting the votes of the Electors.

## Starting code
- You'll find everything necessary in the start.html file.
- You don't have to solve the task there, you can separate it to multiple files if you want to. You don't have to solve the tasks in different code blocks.
- If you want to merge tasks, feel free to do so!  

## 1. Task - 1 point
You have schemed around the Imperial Court and found out some likely votes.  
Which candidate is predicted to gain the most votes?  
Log the solution into the browser console!  

## 2. Task - 2 points
Some candidates are also Electors.  
Find the ones that are likely to vote for themselves!  
Log the solution into the browser console!  

## 3. Task - 1 point
King Unnamed of Nowhereland is threatening to attack the Empire, so the votes will change depending on the army size of the candidate.  
Each candidate will get army size times vote count points.  
Log the names alongside their new points to the browser console!  
*If you want to have smaller numbers on your page, you can do: army size divided by 1000, times vote count.*

## 4. Task - 2 points
Write the ruler names alongside their new points into an unordered list on the page!  
For example: Paul Atreides (66000)  
*If you could not solve task 3, write simply the vote count.*  
  
## 5. Task - 2+2 points
We want to announce the new Emperor when the time is right by highlighting them.  
If we click on a candidate, mark them Emperor (for example with a crown simbol)! (2 points)  

There can only be one Emperor.  
Make it so that if somebody is already selected as new Emperor but we click on another candidate, the crown passes to them. (2 points)  
*We should be able to click as many times as we want, the crown should always pass to the one we clicked on.*  

**Help:** If you want to solve this by selecting the previous Emperor and make some function call on them, but there's nobody selected as of yet, you might get an error saying you can't reach a property of undefined. Remember, you can use an if to check for that! `if(something){}` means that if `something` is not `undefined` or `null`