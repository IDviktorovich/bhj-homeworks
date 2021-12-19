const book = document.getElementById('book');
const bookSizes = document.querySelectorAll('.font-size');
console.log(bookSizes[0]);

for (let i = 0; i < bookSizes.length; i++) {
    const size = bookSizes[i].dataset.size;
        
    bookSizes[i].addEventListener('click', function(event) {
        event.preventDefault();
        let active = document.querySelector('.font-size_active');
        active.classList.remove('font-size_active');
        this.classList.toggle('font-size_active');

        if (size === 'small') {
            book.classList.add('book_fs-small')
        } else {
            book.classList.remove('book_fs-small')
        }
        if (size === 'big') {
            book.classList.add('book_fs-big')
        } else {
            book.classList.remove('book_fs-big')
        }
    })
}