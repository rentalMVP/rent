import { collection, getDocs, addDoc, orderBy, query, limit, startAt } from "firebase/firestore"
import { db } from "../../pages/lib/init-firebase"
import Airtable from "airtable";
const  getData = () =>{ 
    const listCollectionRef = collection(db, 'rental_items');
    let base = new Airtable({ apiKey: process.env.NEXT_PUBLIC_API_KEY }).base(process.env.NEXT_PUBLIC_BASE);
    base('Rental Items').select({
      // Selecting the first 30 records in Grid view:
      filterByFormula:"{Added to Firebase} = ''",
      pageSize: 100,
    }).eachPage(function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.
      records.forEach(function (record) {
        console.log(record["_rawJson"]);
        resultList = resultList.concat(record._rawJson);
        setTimeout(()=>{}, 500);
        base('Rental Items').update(record._rawJson.id, {
          "Item ID": record._rawJson.fields["Item ID"],
          "Item Name": record._rawJson.fields["Item Name"],
          "Item Description": record._rawJson.fields["Item Description"],
          "Item Image": record._rawJson.fields["Item Image"],
          "Item Minimum Price": record._rawJson.fields["Item Minimum Price"],
          "Charge Rate Type": record._rawJson.fields["Charge Rate Type"],
          "Rental Owner": record._rawJson.fields["Rental Owner"],
          "Added to Firebase": true,
          // "Last Modified": "2022-11-03T06:12:55.000Z"
        }, {typecast: true}, function(err, record) {
          if (err) {
            console.error(err);
            return;
          }
        });
        
        addDoc(listCollectionRef, { id: record._rawJson["id"], createdTime: record._rawJson["createdTime"], fields: record._rawJson["fields"] }).then(response => (console.log(response))).catch(error => {
          console.log(error.message)
        });

      });
      setTimeout(()=>{}, 1000);
      fetchNextPage();
    }, function done(err) {
      if (err) { console.error(err); return; }
    });
  }
  export default getData