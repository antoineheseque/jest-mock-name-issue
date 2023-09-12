import AccountRepository from "../account.repository";

export function showAccountsNames(): string {
    return AccountRepository.listAccounts().toString();
}
