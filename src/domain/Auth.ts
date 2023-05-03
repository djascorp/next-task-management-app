import { BASE_URL } from "@/constants/application";

export class Auth {
    static async login(cred: { username: string, password: string }) {
        try {
            let resp = await fetch(BASE_URL + 'auth/login', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cred)
            });
            let data = await resp.json();
            return data;
        } catch (e) {
            throw ("Login or Password incorect ");
        }

    }
}