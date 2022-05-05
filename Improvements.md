# Possible Improvements
* To reduce the number of fetch requests sent to the server, we can use a search button to have only on request per search and not each type we type a character. (in this case we can't use SWR)
* We can use filters rather than free search, because types are limited, this aims to avoid errors and unnecessary fetch requests with non-existent types.