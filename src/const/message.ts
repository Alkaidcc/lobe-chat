export const LOADING_FLAT = '...';

//  start with this，it should be a function message
export const FUNCTION_MESSAGE_FLAG = '{"tool_calls"';

export const isFunctionMessageAtStart = (content: string) => {
  return content.startsWith(FUNCTION_MESSAGE_FLAG);
};

export const testFunctionMessageAtEnd = (content: string) => {
  const regExp = /{"function_call":.*?}}/;
  const match = content.match(regExp);

  return { content: match ? match[0] : '', valid: match };
};
