const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
// const promiseOutput = null;
const promiseOutput = async (emosi) => {  
    const promiseIXX = await promiseTheaterIXX().then((dataValue)=>{ return dataValue}).catch((error)=>{return []})
    const promiseVGC = await promiseTheaterVGC().then((dataValue)=>{ return dataValue}).catch((error)=>{return []})

	const promiseTheater = [...promiseIXX, ...promiseVGC]
	const hasil = promiseTheater.filter(element =>(element.hasil === emosi)).length 
	return hasil
};

module.exports = {
  promiseOutput,
};
