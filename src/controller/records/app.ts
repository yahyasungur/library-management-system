import recordUC from '../../use-cases/records/app';
// #####
import bookBorrow from './borrow-book';
import bookReturn from './return-book';
import recordSelect from './select-record';
// #####
const bookBorrows = bookBorrow(recordUC.addRecords);
const bookReturns = bookReturn(recordUC.addRecords);
const recordSelects = recordSelect(recordUC.selectRecords);
// #####
const RecordController = {
    bookBorrows,
    bookReturns,
    recordSelects
};

export default RecordController;
