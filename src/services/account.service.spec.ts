import { showAccountsNames } from "./account.service";
import MockRepository from "../account.repository";

jest.mock("../account.repository", () => ({
    listAccounts: jest.fn(() => ["one", "two", "three"])
}));
const mockRepo = jest.mocked(MockRepository)

describe("showAccountsNames", () => {
    beforeEach(() => {
        mockRepo.listAccounts.mockReturnValue(["one", "two", "three"])
    })

    it("show account names", () => {
        const accountNames = showAccountsNames()
        expect(mockRepo.listAccounts).toHaveBeenCalledTimes(1)
        expect(accountNames).toBe("one,two,three")
    });

    beforeEach(() => {
        mockRepo.listAccounts.mockClear()
    })
})
