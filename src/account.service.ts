import { listAccounts } from "./account.repository";

export function showAccountsNames(): string {
    return listAccounts().toString();
}
