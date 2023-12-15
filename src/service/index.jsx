import { database } from '../helper/firebase/index'
import { ref , push , onValue , remove } from "firebase/database";
import baseUrl from '../constants/base/baseUrl'
import axios from "axios";

const instanceAxios = axios.create({
    baseURL: baseUrl,
})

export const getBookDetails = async (id) => {
    const response = await instanceAxios.get(`/${id}`);
    return response;
};

export const getBook = async (book_name) => {
    const response = await instanceAxios.get(`?q=${book_name}`);
    return response;
};

export const addbook = (data,refColumn) => {
    const books = ref(database,refColumn)
    push(books,data)
}

export const getBooks = () => {
    const column = ref(database, 'books');
    onValue(column, (snapshot) => {
        const data = snapshot.val();
        console.log(Object.entries(data));
        return Object.entries(data)
    });
}

export const deleteBook = (id) => {
    let rmv = ref(database, "books/" + id);
    remove(rmv);
}

export const addComment = async (form) => {
    let response = await fetch("https://blog-api-t6u0.onrender.com/posts/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
    });
    let data = await response.json();
    console.log(data);
    return data;
}

export const getComment = async () => {
    let response = await fetch("https://blog-api-t6u0.onrender.com/posts/", {
        method: "GET",
    });
    let data = await response.json();
    return data
}