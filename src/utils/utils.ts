export const pushToRandomIdx = (arr: string[], item: string) => {
	const newArr = [...arr]
	const randomIdx = Math.floor(Math.random() * (arr.length + 1))
	newArr.splice(randomIdx, 0, item)
	return newArr
}
