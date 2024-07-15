// Relationships ->
// SQL(via foreign keys)
// one to one
// one to many
// many to many

// mongo relationships
// one to many / approach 1 (one to few) -> store the child doc into parent

// one to many / approach 2 (one to many) -> store a reference to the child doc inside parent

// one to many / approach 3 (one to squillions) -> store a reference to the parent doc inside child

// example of all above relationship is given in models folder.

// Handling deletion -> if one user deletes its account then all of his posts should also get deleted this is known as handling deletion

// if we try to delete one customer using findByIdAndDelete then only one customer is deleted but order remain as it is to prevent there is two mongoose middleware is there.
// 1.pre -> run before query is excuted
// 2.post -> run after query is excuted
