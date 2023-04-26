// Library imports
import axios, { AxiosResponse } from "axios"

// App imports
import { config } from "./config";

// Define interface to describe a contact. We only have an _id field when retrieving or adding,
// so it has to be optional (?)
export interface IContact { _id?: number, name: string, email: string }

// The worker that will perform contact operations
export class Worker {
  public async listContacts(): Promise<IContact[]> {
    const response: AxiosResponse = await axios.get(`${config.serverAddress}/contacts`);
    return response.data;
  } /* End listContacts() */

  public async addContact(inContact: IContact): Promise<IContact> {
    const response: AxiosResponse = await axios.post(
      `${config.serverAddress}/contacts`, inContact
    );
    return response.data;
  } /* End addContact() */

  public async deleteContact(inID): Promise<void> {
    await axios.delete(
      `${config.serverAddress}/contacts/${inID}`
    );
  } /* End deleteContact() */



} /* End class */