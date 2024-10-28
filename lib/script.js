// Manage books
function addBook() {
    const bookName = prompt("Enter book name:");
    if (bookName) {
        const bookList = document.getElementById("book-list");
        const li = document.createElement("li");
        li.textContent = bookName;
        bookList.appendChild(li);
    }
}

// Manage members
function addMember() {
    const memberName = prompt("Enter member name:");
    if (memberName) {
        const memberList = document.getElementById("member-list");
        const li = document.createElement("li");
        li.textContent = memberName;
        memberList.appendChild(li);
    }
}

// Manage borrowing
function borrowBook() {
    const bookName = prompt("Enter book name to borrow:");
    const memberName = prompt("Enter member name:");
    if (bookName && memberName) {
        const borrowList = document.getElementById("borrow-list");
        const li = document.createElement("li");
        li.textContent = `${memberName} borrowed "${bookName}"`;
        borrowList.appendChild(li);
    }
}
