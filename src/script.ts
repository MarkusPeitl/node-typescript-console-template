import { ArgumentParser } from 'argparse';
import fs from 'fs';

console.log('Script executed');

const parser = new ArgumentParser({
	description: 'A sample console application template'
});

parser.add_argument('source', { help: 'Source path to consume' });
parser.add_argument('target', { help: 'Target path to write to' });

const args: any = parser.parse_args();

function readDocument(targetFilePath: string): string | null {
	console.log('Reading document from: ' + targetFilePath);
	if (fs.existsSync(targetFilePath)) {
		return fs.readFileSync(targetFilePath) as unknown as string;
	}
	return null;
}
function writeDocument(contents: string, targetFilePath: string): void {
	console.log('Writing: ' + contents + '\nto: ' + targetFilePath);
	fs.writeFileSync(targetFilePath, contents);
}

const documentContents: string | null = readDocument(args.source);

if (documentContents) {
	const newDocumentContents: string = documentContents + '\n Appended data for document output';

	writeDocument(newDocumentContents, args.target);
}

console.log('Script finished -> exiting');
