import Client from "./client";
import Notify from "./notify";

const client = new Client();
const notify = new Notify(client);

notify.sendEmail()