export class CustomError extends Error {
    error: Error
    constructor(message: string, error: Error) {
        super(message)
        this.error = error
    }
}