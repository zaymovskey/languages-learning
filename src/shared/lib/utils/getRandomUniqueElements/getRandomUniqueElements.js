export function getRandomUniqueElements(array, count) {
    if (count > array.length) {
        throw new Error('Количество не может быть больше длинны массива');
    }
    const shuffledArray = array.slice().sort(() => 0.5 - Math.random());
    return shuffledArray.slice(0, count);
}
