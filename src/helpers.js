import { API_TECHNOLOGIES } from "constants.js";

export const getTechnologies = async () => {

    const response = await fetch(API_TECHNOLOGIES);
    return response.json();
};