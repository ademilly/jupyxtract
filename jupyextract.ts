import fs from 'fs';

const usage = (): string => 'usage: node index.js [pathtofile]';

const exists = (filepath: string): { value: string, error: string | undefined } => ({
  value: filepath,
  error: fs.existsSync(filepath) ? undefined : `${filepath} is not a valid file`,
});

const readToJSON = (filepath: string): { object: any, error: string | undefined } => {
  try {
    return {
      object: JSON.parse(fs.readFileSync(filepath, 'utf-8')),
      error: undefined,
    }
  } catch (e) {
    return {
      object: undefined,
      error: `${filepath} is not a valid JSON file`,
    };
  }
};

const extractSources = ({ cells }: any): string => cells.map(({ source }: any) => source.join('')).join('\n');
const main = () => {
  const { value, error } = exists(process.argv[2]);
  if (error !== undefined) {
    console.log(error);
    console.log(usage());
    process.exit(1);
  }

  const { object, error: err } = readToJSON(value);
  if (err !== undefined) {
    console.log(err);
    process.exit(1);
  }

  console.log(extractSources(object));

  process.exit(0);
};

main();
