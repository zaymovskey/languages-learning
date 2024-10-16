export function removeLastSegment(path: string): string {
  const segments = path.split('/');
  segments.pop();
  return segments.join('/');
}
