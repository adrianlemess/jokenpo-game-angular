/**
 * Function to return a enum.
 * Got from: https://stackoverflow.com/questions/44230998/how-to-get-a-random-enum-in-typescript
 * I've decided to isolate this logic in a function to facilitate further tests
 */

export const randomEnum = <T>(anEnum: T): T[keyof T] => {
    const enumValues = Object.values(anEnum) as unknown as T[keyof T][];
    const randomIndex = Math.floor(Math.random() * enumValues.length);

    return enumValues[randomIndex];
};
