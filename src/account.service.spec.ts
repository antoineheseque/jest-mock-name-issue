import { showAccountsNames } from "./account.service"

const mockListAccounts = jest.fn()
jest.mock("./account.repository", () => ({
    listAccounts: mockListAccounts,
}))

describe("showAccountsNames", () => {
  beforeEach(() => {
    mockListAccounts.mockReturnValue(["one", "two", "three"])
  })

  it("show account names", () => {
    const accountNames = showAccountsNames()
    expect(mockListAccounts).toHaveBeenCalledTimes(1)
    expect(accountNames).toBe("one,two,three")
  })
})
