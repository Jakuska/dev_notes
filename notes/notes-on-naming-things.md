# Notes on Naming Things

* Class, interface and variable names are nouns. The bigger the scope, the shorter the name.
* Class names should not describe implementation.
* Functions and method names are verbs. If the function or method returns a boolean then it should hasve is or has prefix, for example, isValid or hasDebt.
* Variable names should be long if they have a long scope, so opposite rule from class names and function names. 
* Variable names should be searchable.
* Names should be pronounceable.
* Avoid vague names like manager because vague names are a synonym for anything.
* Git commits should use imperative mood in the subject line. More on good Git commits: https://chris.beams.io/posts/git-commit
* The above are general rules. It’s also important to be aware of different conventions like ESlint for JS, pep8 for Python, BEM for CSS.

For APIs: 
* Use plural nouns not verbs. The verbs will be conveyed by the HTTP method. Here's example from Stripe API: GET /v1/customers/:id
* Protect your names from change! For example, use generic names like Customer, User, Media.

Credits:
This post was highly inspired by Robert Martin’s Clean Code series.

