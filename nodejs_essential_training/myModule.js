/* In NodeJs every javascript file is its own module. So far in past exercises we have been loading modules with
 the require function which is part of the commonJs module pattern, but it only represents half the pattern, the
  half that loads the modules. The other half of the pattern is 'module.exports', which has a mechanism to export
   data and functionality form a module*/


let count = 0;

const inc = () => ++count;
const dec = () => --count;

const getCount = () => count;

module.exports = {
	inc,
	dec,
	getCount
}