class Sorter {



  constructor() {  

    this.date = [];
    this.defFunction =  function(a, b){return a - b;};

  }

  add(element) {
    this.date.push(element);

  }



  at(index) {
    return this.date[index];

  }

  get length() {

    return this.date.length;
  }

  toArray() {
    return this.date;
  }

  sort(indices) {

    
    indices.sort();
    let naf = [];
    let raf = this.date;
    if (indices.length > 1) {


      for (let i = 0; i < indices.length; i++) {
        naf.push(raf[indices[i]]);
      }
      naf.sort(this.defFunction);


/*
    if(compareFunction==null)
    this.defFunction = function(a, b){return a - b;};
    else

*/


      for (let i = 0; i < indices.length; i++) {
        raf.splice(indices[i], 1, naf[i]);
      }
    }

    return raf;
  }

  setComparator(compareFunction) {

    this.defFunction = compareFunction;
  }
}

module.exports = Sorter;