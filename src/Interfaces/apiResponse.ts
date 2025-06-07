export default interface apiResponse {
  data?: {
    //this will be included in suggestions so use the format if possible
    statusCode?: number;
    isSuccess?: boolean;
    errorMessages?: Array<string>;
    result: {
      //this will not give suggestions
      [key: string]: string;
    };
  };
  error?: any;
}
