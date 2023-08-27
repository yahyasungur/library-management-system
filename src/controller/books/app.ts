import bookUC from '../../use-cases/books/app';
// #####
import bookAdd from './insert-book';
import bookSelect from './select-book';
import bookDelete from './delete-book';
// #####
const bookAdds = bookAdd(bookUC.addBooks);
const bookSelects = bookSelect(bookUC.selectBooks);
const bookDeletes = bookDelete(bookUC.deleteBooks);
// #####
const BookController = {
    bookAdds,
    bookSelects,
    bookDeletes
};

export default BookController;
