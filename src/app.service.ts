import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class AppService {
  getHello(): string {
    const filename = 'example.txt';
    const content = 'This is new content appended to the file.\n';

    // Open the file in append mode ('a' for appending)
    fs.open(filename, 'a', (err, fileDescriptor) => {
      if (err) {
        console.error('Unable to open the file.');
        return;
      }

      // Write the content to the file
      fs.write(fileDescriptor, content, (writeErr) => {
        if (writeErr) {
          console.error('Error writing to the file.');
        } else {
          console.log(
            `Content appended to the file '${filename}' successfully!`,
          );
        }

        // Close the file handle
        fs.close(fileDescriptor, (closeErr) => {
          if (closeErr) {
            console.error('Error closing the file.');
          }
        });
      });
    });

    return 'Hello World!';
  }
}
