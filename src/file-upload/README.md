# File Upload Directory

This directory contains the file upload functionality, including S3 integration and file management features.

## Directory Structure

- `s3Utils.ts` - AWS S3 utility functions
- `FileUploadPage.tsx` - File upload page component
- `operations.ts` - File upload operations and queries

## Features

- Secure file uploads to AWS S3
- File type validation
- Progress tracking
- Error handling
- File management
- Direct S3 uploads

## Usage

### File Upload Component

```typescript
import { FileUpload } from './FileUploadPage'

// Use the file upload component
<FileUpload 
  onUploadComplete={handleUploadComplete}
  allowedTypes={['image/*', 'application/pdf']}
/>
```

### S3 Operations

```typescript
import { uploadToS3, getSignedUrl } from './s3Utils'

// Upload file to S3
const url = await uploadToS3(file)

// Get signed URL for private files
const signedUrl = await getSignedUrl(fileKey)
```

## Development Guidelines

1. Implement proper file validation
2. Handle large file uploads
3. Show upload progress
4. Implement retry mechanism
5. Handle upload cancellation
6. Secure file access

## File Upload Flow

1. File selection
2. Validation
3. Pre-signed URL generation
4. Direct S3 upload
5. Progress tracking
6. Success/error handling

## Security

- Validate file types
- Implement size limits
- Use pre-signed URLs
- Scan for malware
- Set proper permissions
- Implement access control

## Environment Variables

Required environment variables:

```
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_REGION=your_region
S3_BUCKET=your_bucket_name
```

## Error Handling

- File size limits
- Invalid file types
- Network errors
- S3 errors
- Timeout handling
- Quota exceeded

## Performance

- Implement chunked uploads
- Show upload progress
- Handle multiple files
- Optimize large files
- Cache file metadata

## File Types

Supported file types:
- Images (jpg, png, gif)
- Documents (pdf, doc)
- Archives (zip)
- Custom types

## UI Features

- Drag and drop
- Progress bar
- File preview
- Cancel button
- Retry option
- Success/error states

For more detailed documentation about file upload features or S3 integration, please refer to the individual file documentation. 