import conf from '../conf/conf'
import { Client, Databases, Storage, Query, ID } from "appwrite";


export class Service{
    client = new Client()
    databases;
    bucket;

    constructor(){
        this.client.setEndpoint(conf.appWriteUrl)
        .setProject(conf.appWriteProjectId)
        
        // Variáveis que têm acesso a basicamente tudo o que queremos
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    // post
    async getPost(slug){
        try{
            return await this.databases.getDocument(conf.appWriteDatabaseId, conf.appWriteCollectionId, slug)
        } catch(error){
            console.log("Appwrite service :: getPost() :: ", error)
        }
        return false;
    }

    // postS
    async getPosts(queries = [Query.equal("status", "active")]){
        try{
            return await this.databases.listDocuments(conf.appWriteDatabaseId, conf.appWriteCollectionId, queries)
        } catch(error){
            console.log("Appwrite service :: getPosts() :: ", error)
        }
        return false;
    }

    // createPost
    async createPost({title, slug, content, featuredImage, status, userId}){
        try{
            return await this.databases.createDocument(
                conf.appWriteDatabaseId, 
                conf.appWriteCollectionId, 
                slug,
                {title, content, featuredImage, status, userId})

        } catch(error){
            console.log("Appwrite service :: createPost() :: ", error)
        }
        return false;
    }

    // updatePost
    async updatePost(slug, {title, content, featuredImage, status}){
        try{
            return await this.databases.updateDocument(
                conf.appWriteDatabaseId, 
                conf.appWriteCollectionId, 
                slug,
                {title, content, featuredImage, status})

        } catch(error){
            console.log("Appwrite service :: updatePost() :: ", error)
        }
        return false;
    }

    // deletePost
    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                conf.appWriteDatabaseId, 
                conf.appWriteCollectionId, 
                slug)

                return true;

        } catch(error){
            console.log("Appwrite service :: deletePost() :: ", error)
        }
        return false;
    }

    // Storage service

    // Uploading files
    async uploadFile(file){
        try{
            return this.bucket.createFile(
                conf.appWriteBucketId,
                ID.unique(),
                file
            )

        } catch(error){
            console.log("Appwrite service :: uploadFile() :: ", error)
        }
        return false;
    }

    // Deleting files
    async deleteFile(fileID){
        try{
            return this.bucket.deleteFile(
                conf.appWriteBucketId,
                fileID
            )

        } catch(error){
            console.log("Appwrite service :: deleteFile() :: ", error)
        }
        return false;
    }

    // File preview
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appWriteBucketId,
            fileId
        ).href
    }
}

// Criando, enfim, um serviço e exportando abaixo pra uso:
const service = new Service()

export default service;