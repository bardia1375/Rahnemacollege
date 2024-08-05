import tw from "tailwind-styled-components";

export const Container = tw.div`
  relative
`;

export const Label = tw.label`
  block mb-2
`;

export const Input = tw.input`
  placeholder:text-sm placeholder:opacity-60 block w-full px-8 py-1 text-lg border-2 outline-none border-#CDCDCD bg-white rounded-full caret-new-blue
`;

export const Select = tw.select`
  block w-full px-2 py-1 text-sm border border-new-gray rounded focus:border-blue-500 focus:ring-blue-500
  bg-new-gray
`;

export const CheckboxContainer = tw.label`
  flex my-1 cursor-pointer rounded
`;

export const CheckboxInput = tw.input`
  mr-2 bg-new-gray checked:border-red-500
`;

export const RadioInput = tw.input`
  mr-2 bg-new-gray checked:border-red-500
`;

export const Title = tw.p`py-2 font-bold text-lg first-letter:uppercase`;
