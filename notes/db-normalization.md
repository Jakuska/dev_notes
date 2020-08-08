# DB Normalization

## What is Normalization?
From wiki:

"Database normalization is the process of structuring a relational database[clarification needed] in accordance with a series of so-called normal forms in order to reduce data redundancy and improve data integrity. It was first proposed by Edgar F. Codd as part of his relational model."
https://en.wikipedia.org/wiki/Database_normalization

We do database normalization to structure our databases in a simple, clean manner. In particular, you are making sure that data integrity is preserved and that data redundancy is reduced.

## Why do DB Normalization?
* Minimize duplicate data
* Avoid insertion, update, delete anomalies
* Cleaner logic

One of possible cons is that you will have a performance decrease because you will have to use join queries to deal with the multiple tables.

While reading about this, I found an interesting point made this by this stack overflow user:
"With a relational data model, you can say with absolute certainty whether it is "normalized" or not, because it must pass ALL the tests for normal form, and they are quite specific. With an object model, on the other hand, because the goal of “understandable, maintainable, testable, etc” is rather vague, you cannot say with any certainty whether you have met that goal. With many of the design heuristics, you cannot even say for sure whether you have followed them. Have you followed the DRY principle if you’re applying patterns to your design? Surely repeated use of a pattern isn’t DRY?" Stack overflow post: https://stackoverflow.com/questions/476422/object-normalization/476425

So what this user is saying is that you can make an objective, definite assessment on whether the DB is normalized or not. This is great! Because you then have a simple Definition of Done when refactoring.

## NF Rules
Rules beyond NF3 are not practical and so will be ignored here.

The rules:
* 1NF: Every table cell should have a unique and atomic value. There should be a primary key.
* 2NF: All the non primary key columns in the table should depend on the entire primary key. In other words, avoid partial dependency.
* 3NF: All the non primary key columns in the table should depend directly and entirely on the entire primary key.

1NF prevents data from hiding and thus potentially creating inconsistencies.

2NF and 3NF prevents accidentally deleting information. For example, if you mix teacher information with their class information then you might accidentally delete data about their class when the teacher leaver.