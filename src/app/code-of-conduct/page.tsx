
export default function CodeOfConductPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-8">Code of Conduct</h1>
      <div className="prose dark:prose-invert prose-lg max-w-none text-muted-foreground">
        <h2 className="text-foreground">1. Our Pledge</h2>
        <p>
          We, as members, contributors, and leaders, pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.
        </p>
        <p>
          We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community.
        </p>

        <h2 className="text-foreground">2. Our Standards</h2>
        <p>
          Examples of behavior that contributes to a positive environment for our community include:
        </p>
        <ul>
          <li>Demonstrating empathy and kindness toward other people</li>
          <li>Being respectful of differing opinions, viewpoints, and experiences</li>
          <li>Giving and gracefully accepting constructive feedback</li>
          <li>Accepting responsibility and apologizing to those affected by our mistakes, and learning from the experience</li>
          <li>Focusing on what is best not just for us as individuals, but for the overall community</li>
        </ul>

        <p>Examples of unacceptable behavior include:</p>
        <ul>
          <li>The use of sexualized language or imagery, and sexual attention or advances of any kind</li>
          <li>Trolling, insulting or derogatory comments, and personal or political attacks</li>
          <li>Public or private harassment</li>
          <li>Publishing others' private information, such as a physical or email address, without their explicit permission</li>
          <li>Other conduct which could reasonably be considered inappropriate in a professional setting</li>
        </ul>

        <h2 className="text-foreground">3. Enforcement Responsibilities</h2>
        <p>
          Community leaders are responsible for clarifying and enforcing our standards of acceptable behavior and will take appropriate and fair corrective action in response to any behavior that they deem inappropriate, threatening, offensive, or harmful.
        </p>
        <p>
          Community leaders have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, and will communicate reasons for moderation decisions when appropriate.
        </p>

        <h2 className="text-foreground">4. Scope</h2>
        <p>
          This Code of Conduct applies within all community spaces, and also applies when an individual is officially representing the community in public spaces. Examples of representing our community include using an official e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event.
        </p>

        <h2 className="text-foreground">5. Enforcement</h2>
        <p>
          Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the community leaders responsible for enforcement at <a href="mailto:conduct@calabartechcommunity.com" className="text-accent">conduct@calabartechcommunity.com</a>. All complaints will be reviewed and investigated promptly and fairly.
        </p>
        <p>
          All community leaders are obligated to respect the privacy and security of the reporter of any incident.
        </p>

        <h2 className="text-foreground">6. Attribution</h2>
        <p>
          This Code of Conduct is adapted from the <a href="https://www.contributor-covenant.org/version/2/1/code_of_conduct.html" className="text-accent" target="_blank" rel="noopener noreferrer">Contributor Covenant</a>, version 2.1.
        </p>
      </div>
    </div>
  );
}
