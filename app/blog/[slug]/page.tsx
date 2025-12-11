import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, ArrowLeft } from 'lucide-react'
import type { ReactNode } from 'react'
import { ROUTES } from '../AppRoutes'

const blogPosts: Record<
  string,
  {
    title: string
    date: string
    readTime: string
    category: string
    content: ReactNode
  }
> = {
  'how-to-use-affirmations-effectively': {
    title: ROUTES.blogPosts['how-to-use-affirmations-effectively'].title,
    date: ROUTES.blogPosts['how-to-use-affirmations-effectively'].date,
    readTime: ROUTES.blogPosts['how-to-use-affirmations-effectively'].readTime,
    category: ROUTES.blogPosts['how-to-use-affirmations-effectively'].category,
    content: (
      <>
        <p className="lead">
          Daily affirmations have gained massive popularity, but many people wonder: do they
          actually work? The answer is yes—when done correctly. This comprehensive guide will show
          you exactly how to use affirmations effectively based on scientific research.
        </p>

        <h2>What Are Affirmations?</h2>
        <p>
          Affirmations are positive statements that you repeat to yourself regularly to challenge
          and overcome negative thoughts. They work by helping you believe in your potential and
          reprogram your thought patterns through{' '}
          <a
            href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3575415/"
            target="_blank"
            rel="noopener noreferrer"
          >
            neuroplasticity
          </a>
          .
        </p>

        <h2>The Science Behind Affirmations</h2>
        <p>Research from psychology and neuroscience shows that affirmations can:</p>
        <ul>
          <li>Reduce stress and improve problem-solving under pressure</li>
          <li>Increase activity in self-processing areas of the brain</li>
          <li>Improve academic performance and health behaviors</li>
          <li>Strengthen neural pathways associated with positive self-view</li>
        </ul>

        <div className="bg-violet-50 border-l-4 border-violet-500 p-6 my-8 rounded-r-lg">
          <p className="text-gray-800 font-semibold mb-2">💡 Did you know?</p>
          <p className="text-gray-700">
            A{' '}
            <a
              href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0062593"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-600 hover:underline"
            >
              2013 study
            </a>{' '}
            found that self-affirmation exercises can improve problem-solving performance under
            stress by up to 50%.
          </p>
        </div>

        <h2>How to Practice Affirmations Effectively</h2>

        <h3>1. Choose the Right Time</h3>
        <p>The most effective times to practice affirmations are:</p>
        <ul>
          <li>
            <strong>Morning:</strong> Sets a positive tone for your day (try our{' '}
            <Link
              href={ROUTES.affirmations.general.path}
              className="text-violet-600 hover:underline"
            >
              morning affirmations
            </Link>
            )
          </li>
          <li>
            <strong>Before bed:</strong> Programs your subconscious mind during sleep
          </li>
          <li>
            <strong>During meditation:</strong> When your mind is calm and receptive
          </li>
        </ul>

        <h3>2. Make Them Personal and Specific</h3>
        <p>Generic affirmations are less effective. Instead of &#34;I am successful,&#34; try:</p>
        <ul>
          <li>&#34;I am successfully completing my project deadline this week&#34;</li>
          <li>&#34;I am confident speaking up in team meetings&#34;</li>
          <li>&#34;I am making healthy food choices that fuel my body&#34;</li>
        </ul>

        <p>
          Need inspiration? Check out our{' '}
          <Link href={ROUTES.affirmations.career.path} className="text-violet-600 hover:underline">
            career affirmations
          </Link>{' '}
          or{' '}
          <Link
            href={ROUTES.affirmations.confidence.path}
            className="text-violet-600 hover:underline"
          >
            confidence affirmations
          </Link>{' '}
          for category-specific examples.
        </p>

        <h3>3. Use Present Tense</h3>
        <p>
          Frame affirmations as if they&#39;re already true. Your brain responds better to &#34;I
          am&#34; statements than &#34;I will be&#34; statements.
        </p>

        <h3>4. Add Emotion</h3>
        <p>
          Don&#39;t just say the words—feel them. Emotion is what creates the neural pathways that
          make affirmations stick.
        </p>

        <h3>5. Be Consistent</h3>
        <p>
          Research shows it takes 21-66 days to form a new habit. Practice your affirmations daily
          for at least 30 days to see real results.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
          <p className="text-gray-800 font-semibold mb-2">📚 Related Reading</p>
          <p className="text-gray-700">
            Learn more about{' '}
            <Link
              href={ROUTES.blogPosts['science-of-affirmations'].path}
              className="text-blue-600 hover:underline"
            >
              the neuroscience behind affirmations
            </Link>{' '}
            and why they actually work.
          </p>
        </div>

        <h2>Common Mistakes to Avoid</h2>
        <ul>
          <li>
            <strong>Being too vague:</strong> &#34;I am happy&#34; vs &#34;I am finding joy in small
            moments today&#34;
          </li>
          <li>
            <strong>Not believing it:</strong> If an affirmation feels too far from reality, start
            smaller
          </li>
          <li>
            <strong>Only saying it once:</strong> Repetition is key for neuroplasticity
          </li>
          <li>
            <strong>Negative framing:</strong> Say &#34;I am calm&#34; not &#34;I am not
            anxious&#34;
          </li>
        </ul>

        <h2>Creating Your Own Affirmations</h2>
        <p>Follow this simple formula:</p>
        <ol>
          <li>Start with &#34;I am&#34; or &#34;I&#34;</li>
          <li>Use present tense</li>
          <li>Keep it positive (no &#34;not&#34; or &#34;don&#39;t&#34;)</li>
          <li>Make it believable to you</li>
          <li>Add specific details</li>
        </ol>

        <h2>Examples of Effective Affirmations</h2>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-6 rounded-xl border-2 border-violet-100">
            <p className="font-bold text-gray-900 mb-3">💪 For Confidence:</p>
            <ul className="space-y-2 text-gray-700">
              <li>&#34;I trust my decisions and stand firmly in my choices&#34;</li>
              <li>&#34;I speak my truth with clarity and conviction&#34;</li>
            </ul>
            <Link
              href={ROUTES.affirmations.confidence.path}
              className="text-violet-600 hover:underline text-sm mt-3 inline-block"
            >
              View more →
            </Link>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-100">
            <p className="font-bold text-gray-900 mb-3">💼 For Career:</p>
            <ul className="space-y-2 text-gray-700">
              <li>&#34;I bring unique value to my team and my contributions matter&#34;</li>
              <li>&#34;I am capable of solving complex problems creatively&#34;</li>
            </ul>
            <Link
              href={ROUTES.affirmations.career.path}
              className="text-blue-600 hover:underline text-sm mt-3 inline-block"
            >
              View more →
            </Link>
          </div>
        </div>

        <h2>Conclusion</h2>
        <p>
          Affirmations are a powerful tool for personal growth when used correctly. By following
          these science-backed techniques—choosing the right time, making them personal, using
          present tense, adding emotion, and being consistent—you can harness the full power of
          positive affirmations to transform your mindset and achieve your goals.
        </p>

        <p>
          Ready to start? Visit our{' '}
          <Link href={ROUTES.home.path} className="text-violet-600 hover:underline font-semibold">
            daily affirmations generator
          </Link>{' '}
          to get personalized affirmations for every aspect of your life.
        </p>
      </>
    ),
  },

  'science-of-affirmations': {
    title: ROUTES.blogPosts['science-of-affirmations'].title,
    date: ROUTES.blogPosts['science-of-affirmations'].date,
    readTime: ROUTES.blogPosts['science-of-affirmations'].readTime,
    category: ROUTES.blogPosts['science-of-affirmations'].category,
    content: (
      <>
        <p className="lead">
          Skeptical about affirmations? You&#39;re not alone. Let&#39;s dive into what peer-reviewed
          research actually says about whether positive affirmations work—and why the answer might
          surprise you.
        </p>

        <h2>The Neuroscience of Affirmations</h2>
        <p>
          When you practice affirmations, several fascinating things happen in your brain. Modern{' '}
          <a
            href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4814782/"
            target="_blank"
            rel="noopener noreferrer"
          >
            neuroscience research
          </a>{' '}
          has revealed the concrete mechanisms behind how affirmations work.
        </p>

        <h3>Self-Affirmation Theory</h3>
        <p>
          Developed by psychologist Claude Steele,{' '}
          <a
            href="https://psycnet.apa.org/record/1988-98431-000"
            target="_blank"
            rel="noopener noreferrer"
          >
            self-affirmation theory
          </a>{' '}
          suggests that affirmations work by reminding us of our values and strengthening our sense
          of self-integrity. fMRI studies show that self-affirmation activates the ventromedial
          prefrontal cortex and posterior cingulate cortex—brain regions associated with
          self-related processing and valuation.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
          <p className="text-gray-800 font-semibold mb-2">🧠 Brain Science Fact</p>
          <p className="text-gray-700">
            fMRI scans show that self-affirmation activates the reward centers of your brain,
            similar to receiving positive feedback from others.
          </p>
        </div>

        <h3>Neuroplasticity in Action</h3>
        <p>
          Your brain is constantly rewiring itself based on repeated thoughts and behaviors. This is
          called{' '}
          <a
            href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3182015/"
            target="_blank"
            rel="noopener noreferrer"
          >
            neuroplasticity
          </a>
          . When you consistently practice affirmations:
        </p>
        <ul>
          <li>New neural pathways form</li>
          <li>Positive thought patterns become automatic</li>
          <li>
            The default mode network (DMN) shifts toward more positive self-referential thinking
          </li>
        </ul>

        <h2>What Research Studies Show</h2>

        <h3>Study 1: Academic Performance</h3>
        <p>
          A{' '}
          <a
            href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0062593"
            target="_blank"
            rel="noopener noreferrer"
          >
            2014 study published in PLOS ONE
          </a>{' '}
          found that self-affirmation exercises improved problem-solving performance under stress by
          up to 50% in some participants.
        </p>

        <h3>Study 2: Health Behaviors</h3>
        <p>
          Research in the{' '}
          <a
            href="https://psycnet.apa.org/record/2015-51456-001"
            target="_blank"
            rel="noopener noreferrer"
          >
            Journal of Personality and Social Psychology
          </a>{' '}
          showed that self-affirmation increased physical activity levels over a 2-month period.
          Participants who practiced affirmations exercised an average of 1.5 hours more per week.
        </p>

        <h3>Study 3: Stress Reduction</h3>
        <p>
          A study in{' '}
          <a
            href="https://journals.sagepub.com/doi/10.1177/0956797612464658"
            target="_blank"
            rel="noopener noreferrer"
          >
            Psychological Science
          </a>{' '}
          found that brief self-affirmation activities lowered cortisol (stress hormone) levels in
          chronically stressed individuals.
        </p>

        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-8 rounded-r-lg">
          <p className="text-gray-800 font-semibold mb-2">✅ Evidence-Based Benefits</p>
          <p className="text-gray-700">
            Over 200+ peer-reviewed studies have demonstrated the positive effects of
            self-affirmation on stress reduction, academic performance, and behavior change.
          </p>
        </div>

        <h2>When Affirmations Don&#39;t Work</h2>
        <p>
          It&#39;s important to note that affirmations aren&#39;t magic. Research identifies
          situations where they can backfire:
        </p>
        <ul>
          <li>
            <strong>Low self-esteem:</strong> If the affirmation is too far from your current
            belief, it can actually make you feel worse (start with our{' '}
            <Link
              href={ROUTES.affirmations.confidence.path}
              className="text-violet-600 hover:underline"
            >
              confidence affirmations
            </Link>{' '}
            instead)
          </li>
          <li>
            <strong>Without action:</strong> Affirmations alone won&#39;t change your life—they must
            be paired with behavior change
          </li>
          <li>
            <strong>Forced positivity:</strong> Denying real problems and forcing positivity can be
            counterproductive
          </li>
        </ul>

        <h2>The Right Way to Use Affirmations</h2>
        <p>Based on research, here&#39;s what makes affirmations effective:</p>
        <ol>
          <li>
            <strong>Make them believable:</strong> Bridge the gap between where you are and where
            you want to be
          </li>
          <li>
            <strong>Focus on values:</strong> Affirmations about your core values are more powerful
            than those about specific outcomes
          </li>
          <li>
            <strong>Pair with action:</strong> Use affirmations to support concrete steps you&#39;re
            taking
          </li>
          <li>
            <strong>Practice consistently:</strong> Daily repetition creates the neural changes
          </li>
        </ol>

        <div className="bg-violet-50 border-l-4 border-violet-500 p-6 my-8 rounded-r-lg">
          <p className="text-gray-800 font-semibold mb-2">📖 Learn More</p>
          <p className="text-gray-700">
            Want practical tips? Read our guide on{' '}
            <Link
              href={ROUTES.blogPosts['how-to-use-affirmations-effectively'].path}
              className="text-violet-600 hover:underline"
            >
              how to use affirmations effectively
            </Link>
            .
          </p>
        </div>

        <h2>The Bottom Line</h2>
        <p>
          Yes, affirmations really do work—but not in a magical thinking way. They work through
          concrete neurological mechanisms that have been validated by scientific research. When
          practiced correctly, affirmations can:
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-100">
            <p className="font-bold text-gray-900 mb-3">🧘 Mental Health Benefits:</p>
            <ul className="space-y-2 text-gray-700">
              <li>Reduce stress and anxiety</li>
              <li>Improve problem-solving abilities</li>
              <li>Increase resilience to challenges</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-xl border-2 border-emerald-100">
            <p className="font-bold text-gray-900 mb-3">💪 Performance Benefits:</p>
            <ul className="space-y-2 text-gray-700">
              <li>Support behavior change</li>
              <li>Boost self-confidence over time</li>
              <li>Enhance academic/work performance</li>
            </ul>
          </div>
        </div>

        <p>
          The key is using them as part of a broader strategy for personal growth, not as a
          substitute for action.
        </p>

        <p>
          Start incorporating science-backed affirmations into your routine with our{' '}
          <Link href={ROUTES.home.path} className="text-violet-600 hover:underline font-semibold">
            free daily affirmations tool
          </Link>
          . Try our{' '}
          <Link
            href={ROUTES.affirmations['personal-growth'].path}
            className="text-violet-600 hover:underline"
          >
            personal growth affirmations
          </Link>{' '}
          to begin your journey.
        </p>
      </>
    ),
  },

  'morning-affirmations-routine': {
    title: ROUTES.blogPosts['morning-affirmations-routine'].title,
    date: ROUTES.blogPosts['morning-affirmations-routine'].date,
    readTime: ROUTES.blogPosts['morning-affirmations-routine'].readTime,
    category: ROUTES.blogPosts['morning-affirmations-routine'].category,
    content: (
      <>
        <p className="lead">
          How you start your morning sets the tone for your entire day. These 10 powerful morning
          affirmations are designed to boost your confidence, reduce anxiety, and help you approach
          each day with intention and positivity.
        </p>

        <h2>Why Morning Affirmations?</h2>
        <p>Morning is the optimal time for affirmations because:</p>
        <ul>
          <li>Your mind is fresh and receptive to new thought patterns</li>
          <li>You&#39;re setting intentions before the day&#39;s distractions</li>
          <li>You&#39;re programming your subconscious for the day ahead</li>
          <li>It creates a consistent ritual that compounds over time</li>
        </ul>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg">
          <p className="text-gray-800 font-semibold mb-2">⏰ Best Time to Practice</p>
          <p className="text-gray-700">
            The first 10 minutes after waking, before checking your phone, are the most powerful for
            setting your mental state for the day.
          </p>
        </div>

        <h2>The 10 Best Morning Affirmations</h2>

        <h3>1. &#34;Today, I choose joy and gratitude&#34;</h3>
        <p>
          This affirmation reminds you that happiness is a choice. It redirects your focus to what
          you&#39;re grateful for, activating the brain&#39;s reward centers and setting a positive
          emotional tone.
        </p>

        <h3>2. &#34;I am capable of handling whatever comes my way&#34;</h3>
        <p>
          Building confidence in your resilience reduces anxiety about the unknown. This affirmation
          strengthens your belief in your problem-solving abilities. Perfect for pairing with our{' '}
          <Link
            href={ROUTES.affirmations.confidence.path}
            className="text-violet-600 hover:underline"
          >
            confidence affirmations
          </Link>
          .
        </p>

        <h3>3. &#34;I release what I cannot control and focus on what I can&#34;</h3>
        <p>
          This powerful affirmation helps you let go of worry about things outside your control,
          directing your energy toward productive action.
        </p>

        <h3>4. &#34;My mind is calm, my body is relaxed, and my spirit is at peace&#34;</h3>
        <p>
          A grounding affirmation that connects mind, body, and spirit. Perfect for those who wake
          up feeling anxious or stressed. Complement with our{' '}
          <Link href={ROUTES.affirmations.health.path} className="text-violet-600 hover:underline">
            health affirmations
          </Link>
          .
        </p>

        <h3>5. &#34;I attract positive people and opportunities into my life&#34;</h3>
        <p>
          This affirmation primes your brain to notice opportunities and connections that align with
          your goals, making you more likely to act on them.
        </p>

        <div className="bg-rose-50 border-l-4 border-rose-500 p-6 my-8 rounded-r-lg">
          <p className="text-gray-800 font-semibold mb-2">💖 Pro Tip</p>
          <p className="text-gray-700">
            Combine affirmations with visualization. As you say each one, imagine yourself living
            that truth. This engages more of your brain and strengthens the effect.
          </p>
        </div>

        <h3>6. &#34;I am worthy of love, success, and happiness&#34;</h3>
        <p>
          Many people struggle with worthiness. This affirmation directly addresses self-worth, a
          foundation for all personal growth. Related:{' '}
          <Link
            href={ROUTES.affirmations.relationships.path}
            className="text-violet-600 hover:underline"
          >
            relationship affirmations
          </Link>
          .
        </p>

        <h3>7. &#34;Today, I choose progress over perfection&#34;</h3>
        <p>
          Perfectionism can be paralyzing. This affirmation helps you focus on forward movement
          rather than impossible standards.
        </p>

        <h3>8. &#34;I trust the timing of my life&#34;</h3>
        <p>
          Patience is challenging in our instant-gratification world. This affirmation reduces
          anxiety about where you &#34;should&#34; be and helps you appreciate your current journey.
        </p>

        <h3>9. &#34;I am becoming the best version of myself&#34;</h3>
        <p>
          Framed in the present progressive tense, this acknowledges you&#39;re in process—not
          perfect, but growing. It&#39;s both motivating and compassionate. Explore more with{' '}
          <Link
            href={ROUTES.affirmations['personal-growth'].path}
            className="text-violet-600 hover:underline"
          >
            personal growth affirmations
          </Link>
          .
        </p>

        <h3>10. &#34;Today is full of possibilities&#34;</h3>
        <p>
          Simple yet powerful, this affirmation opens your mind to opportunity. It counters the
          limiting belief that your day is predetermined before it even begins.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-6 rounded-xl border-2 border-violet-100">
            <p className="font-bold text-gray-900 mb-3">🌅 Morning Routine</p>
            <ol className="space-y-2 text-gray-700 text-sm">
              <li>1. Wake up 10 min early</li>
              <li>2. Find a quiet space</li>
              <li>3. Take 3 deep breaths</li>
              <li>4. Speak affirmations aloud</li>
              <li>5. Visualize your day</li>
            </ol>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-100">
            <p className="font-bold text-gray-900 mb-3">📱 Tech Tip</p>
            <p className="text-gray-700 text-sm">
              Set your phone lock screen to display one affirmation. Change it weekly. You&#39;ll
              see it dozens of times daily—powerful reinforcement!
            </p>
          </div>
        </div>

        <h2>How to Practice Your Morning Affirmations</h2>

        <h3>Create a Simple Ritual</h3>
        <ol>
          <li>
            <strong>Set aside 5 minutes:</strong> Before checking your phone or email
          </li>
          <li>
            <strong>Find a quiet space:</strong> Sit comfortably, perhaps near a window
          </li>
          <li>
            <strong>Take 3 deep breaths:</strong> Center yourself and clear your mind
          </li>
          <li>
            <strong>Say each affirmation slowly:</strong> Repeat 3 times with intention
          </li>
          <li>
            <strong>Visualize:</strong> Imagine yourself embodying each statement
          </li>
          <li>
            <strong>Feel the emotion:</strong> Don&#39;t just say words—believe them
          </li>
        </ol>

        <h3>Customize to Your Needs</h3>
        <p>
          While these 10 affirmations are powerful, the most effective affirmations are
          personalized. Consider:
        </p>
        <ul>
          <li>What challenges am I facing today?</li>
          <li>What qualities do I want to embody?</li>
          <li>What would make me feel confident and empowered?</li>
        </ul>

        <p>
          Browse our categories for inspiration:{' '}
          <Link href={ROUTES.affirmations.career.path} className="text-violet-600 hover:underline">
            Career
          </Link>
          ,{' '}
          <Link
            href={ROUTES.affirmations.relationships.path}
            className="text-violet-600 hover:underline"
          >
            Relationships
          </Link>
          ,{' '}
          <Link href={ROUTES.affirmations.health.path} className="text-violet-600 hover:underline">
            Health
          </Link>
          , and more.
        </p>

        <h2>Track Your Progress</h2>
        <p>Keep a journal noting:</p>
        <ul>
          <li>How you felt before affirmations</li>
          <li>How you felt after</li>
          <li>Changes you notice over time</li>
          <li>Which affirmations resonate most</li>
        </ul>
        <p>
          Most people report feeling more positive and centered within 2-3 weeks of consistent
          practice.
        </p>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8 rounded-r-lg">
          <p className="text-gray-800 font-semibold mb-2">📊 Research Shows</p>
          <p className="text-gray-700">
            According to{' '}
            <a
              href="https://journals.sagepub.com/doi/10.1177/0956797612464658"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              research published in Psychological Science
            </a>
            , practicing affirmations for just 5 minutes daily can reduce stress hormones by up to
            25%.
          </p>
        </div>

        <h2>Common Questions</h2>

        <div className="space-y-6">
          <div>
            <p className="font-bold text-gray-900 text-lg mb-2">
              Do I have to use all 10 every morning?
            </p>
            <p>
              No. Start with 2-3 that resonate most, then expand as the habit solidifies. Quality
              over quantity.
            </p>
          </div>

          <div>
            <p className="font-bold text-gray-900 text-lg mb-2">
              What if I don&#39;t believe the affirmations?
            </p>
            <p>
              Start with &#34;bridge&#34; affirmations. Instead of &#34;I am confident,&#34; try
              &#34;I am becoming more confident each day.&#34; Learn more in our{' '}
              <Link
                href={ROUTES.blogPosts['how-to-use-affirmations-effectively'].path}
                className="text-violet-600 hover:underline"
              >
                guide to effective affirmations
              </Link>
              .
            </p>
          </div>

          <div>
            <p className="font-bold text-gray-900 text-lg mb-2">How long until I see results?</p>
            <p>
              Many people feel immediate mood benefits. Deeper changes typically emerge after 3-4
              weeks of daily practice. Consistency is key.
            </p>
          </div>
        </div>

        <h2>Start Tomorrow Morning</h2>
        <p>
          Set your alarm 10 minutes earlier tomorrow. Before you reach for your phone, practice
          these affirmations. After just one week, you&#39;ll notice the difference in your mindset,
          energy, and approach to daily challenges.
        </p>

        <p>
          For personalized daily affirmations delivered fresh each day, try our{' '}
          <Link href={ROUTES.home.path} className="text-violet-600 hover:underline font-semibold">
            free affirmations generator
          </Link>
          . Get started with{' '}
          <Link href={ROUTES.affirmations.general.path} className="text-violet-600 hover:underline">
            general affirmations
          </Link>{' '}
          or choose a specific focus area.
        </p>
      </>
    ),
  },
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) {
    return {}
  }

  return {
    title: `${post.title} - Daily Affirmations Blog`,
    description: `${post.title}. Read our comprehensive guide on affirmations.`,
  }
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map(slug => ({
    slug,
  }))
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <Link
          href={ROUTES.blog.path}
          className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-700 mb-8 font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
            <span className="px-4 py-2 bg-violet-100 text-violet-700 rounded-full font-semibold">
              {post.category}
            </span>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </div>
            <span>{post.readTime}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            {post.title}
          </h1>
        </header>

        <div
          className="prose prose-lg max-w-none
          prose-headings:font-bold prose-headings:text-gray-900
          prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b-2 prose-h2:border-gray-200
          prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
          prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
          prose-a:text-violet-600 prose-a:font-medium prose-a:no-underline hover:prose-a:underline
          prose-ul:my-6 prose-ul:space-y-3
          prose-ol:my-6 prose-ol:space-y-3
          prose-li:text-gray-700 prose-li:leading-relaxed prose-li:text-lg
          prose-strong:text-gray-900 prose-strong:font-bold
          prose-lead:text-2xl prose-lead:text-gray-600 prose-lead:leading-relaxed prose-lead:font-normal prose-lead:mb-10
        "
        >
          {post.content}
        </div>

        <div className="mt-16 pt-8 border-t-2 border-gray-200">
          <div className="bg-linear-to-br from-violet-50 to-purple-50 rounded-2xl p-10 border-2 border-violet-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Start Your Daily Affirmations Practice
            </h3>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Get personalized affirmations delivered fresh every day. Choose from categories like
              career, relationships, health, and more.
            </p>
            <Link
              href={ROUTES.home.path}
              className="inline-block px-8 py-4 bg-violet-600 text-white rounded-lg font-bold hover:bg-violet-700 transition shadow-lg hover:shadow-xl text-lg"
            >
              Try Free Affirmations →
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
