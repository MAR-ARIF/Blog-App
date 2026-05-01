import conf from "../conf/conf";
import { Client, ID , Storage } from "appwrite";
export class StorageService{
    client = new Client();
    storage

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)

        this.storage = new Storage(this.client);
    }
    async uploadFile(file){
        try {
            return await this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file

            )
            
        } catch (error) {
            throw error
            
        }
    }
    async deleteFile(fileId){
        try {
            return await this.storage.deleteFile(
                conf.appwriteBucketId,
                fileId
            )

            
        } catch (error) {
            throw error
            
            
        }
    }
     async getFilePreview(fileId){
        try {
            return await this.storage.getFilePreview(
                conf.appwriteBucketId,
                fileId
            )

            
        } catch (error) {
            throw error
            
            
        }
    }
    


}

const storageService = new StorageService();
export default storageService