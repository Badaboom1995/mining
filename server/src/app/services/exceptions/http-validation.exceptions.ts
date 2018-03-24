export class HttpValidationException {
  constructor(
    private response: string | object,
    private status: number,
    private errors?: any[],
  ) {}

  getResponse(): string | object {
    return this.response;
  }

  getStatus(): number {
    return this.status;
  }

  getMessage(): string[] {
    return this.errors
      .map(error => {
        if (error.children.length > 0) {
          return error.children
            .map(child => this.constraintMessages(child.constraints, child.property))
            .reduce((a, b) => a.concat(b), []);
        } else {
          return this.constraintMessages(error.constraints, error.property);
        }
      })
      .reduce((a, b) => a.concat(b), []);
  }

  constraintMessages(constraints: any, property: string): any {
    const messages = [];
    for (const c in constraints) {
      if (constraints.hasOwnProperty(c)) {
        messages.push({
          name: property,
          message: constraints[c],
        });
      }
    }
    return messages;
  }
}
