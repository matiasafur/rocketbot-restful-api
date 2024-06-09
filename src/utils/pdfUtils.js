import PDF from "pdf-parse-fork";

export const getTextFromPDF = async (buffer) => {
    const data = await PDF(buffer);
    const lines = data.text.split('\n');
    return lines.slice(0, 30)
        .map((line, index) => `${index + 1}| ${line}`)
        .join('\n');
};
