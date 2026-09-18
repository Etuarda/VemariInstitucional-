import styles from './legal-page-shell.module.css';

interface LegalPageShellProps {
  readonly title: string;
  readonly children: React.ReactNode;
}

export function LegalPageShell({ title, children }: LegalPageShellProps) {
  return (
    <article className={styles.shell}>
      <p className={styles.category}>Legal</p>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.content}>{children}</div>
    </article>
  );
}
