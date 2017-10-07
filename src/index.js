/** Test of documentation
 * 
 * 
 * @param {string} news - any text
 */
function MakeMyDay(news) {
  this.startParameter = new Date();
  console.log(this.startParameter + " " + news);
}

let test = new MakeMyDay("Hello");
