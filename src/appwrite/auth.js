/* eslint-disable no-useless-catch */

import { Client, Account, ID } from "appwrite";
import conf from '../conf/conf.js'


// Criando a CLASSE:
export class AuthService {
    client = new Client();
    account;

    // Inicializa coisas personalizadas quando cria-se um objeto da classe
    constructor(){
        this.client
        .setEndpoint(conf.appWriteUrl)
        .setProject(conf.appWriteProjectId)

        this.account = new Account(this.client)
    }

    // Todos os métodos que serão necessários:
    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)

            if(userAccount){
                return this.login({email, password})
            }else{
                return userAccount
            }

        } catch(error){
            throw error
        }
    }

    async login({email, password}){
        try{
            return await this.account.createEmailSession(email, password)
        }catch(error){
            throw error
        }
    }

    async getCurrentUser(){
        try{
            return await this.account.get()
        } catch(error){
            console.log("Appwrite service :: getCurrentUser() :: ", error)
        }
        return null;
    }

    async logout(){
        try{
            await this.account.deleteSessions()
        } catch(error){
            console.log("Appwrite service :: logout() :: ", error)
        }
    }

}

const authService = new AuthService()

export default authService;

/*
MAPA DO ARQUIVO

Aqui, segundo Hiteshi, estamos criando um código altamente reutilizável.
Criamos uma nova classe e, nela, definimos um construtor que iniciliza 
toda a parte de login com os métodos do AppWrite.

Programação Orientada a Objetos purinha aqui!

Depois disso, criamos todos os métodos que forem necessários pra esse OBJETO
*/

