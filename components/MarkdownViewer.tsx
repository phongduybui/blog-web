import dynamic from 'next/dynamic';
import { ViewerProps } from '@toast-ui/react-editor';

interface Props {
  content: string;
}

const Viewer = dynamic<ViewerProps>(
  () => import('@toast-ui/react-editor').then((m) => m.Viewer),
  { ssr: false }
);

const MarkdownViewer = ({ content = '' }: Props) => {
  return <Viewer initialValue={content} />;
};

export default MarkdownViewer;
