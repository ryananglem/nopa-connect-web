import JQuery from 'jquery'

export const getTransactionData = () => {
  const url = 'http://localhost:3000/api/transactions'

  return new Promise((resolve, reject) => {
    resolve(Object.assign([],
      JQuery.getJSON(url, {type: 'no-cors'}, response => {
        return response;
      }).then( (data) => {
        return data.transactions;
        /*
        const returnValue = data.transactions.map(transaction=> {
          return ({

          })
        } );
        return returnValue;
        */
      })
    ))
  })
}
