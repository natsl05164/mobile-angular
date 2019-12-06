export class GetPropertyName{
  private propertyNamesOf = <TObj>() => (name: keyof TObj) => name;
  public GetPropertyName = this.propertyNamesOf<this>();
}
