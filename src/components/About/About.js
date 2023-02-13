import React from 'react';

import SkewBg from '@common/SkewBg';
import PageHeader from '@common/PageHeader';
import Flex from '@common/Flex';

import Quote from './Quote';
import Avatar from './Avatar';

import { AboutWrapper, AboutInfo } from './About.style';

const About = () => {
  return (
    <AboutWrapper id="about">
      <PageHeader>About Me</PageHeader>
      <SkewBg />
      <AboutInfo>
        <div>
          <Avatar src="hfest_avatar_2.jpg" />
        </div>
        <p>
          Hi, I'm Vikram Kumar, a full-stack developer and recent graduate.
          During my time in college, I honed my skills by building various
          projects and gained hands-on experience in full-stack development. I
          am eager to apply my skills and continue growing as a developer in a
          professional setting.
          <br />
          <br />I am a full-stack developer with expertise in the MERN stack, as
          well as experience with Java, JavaScript, C++, Bootstrap, jQuery,
          Ajax, and a little bit of machine learning. I have a strong foundation
          in these programming languages and am a quick learner, constantly
          seeking new challenges and projects. My passion for creating
          well-designed, functional websites and applications that can improve
          people's lives drives my continued growth as a developer.
        </p>
      </AboutInfo>

      <Flex justify="space-between" className="quotes__wrapper">
        <Quote>
          <p>
            “Success and self-improvement are two sides of the same coin, with
            each fueling the other in a never-ending cycle of growth and
            accomplishment.”
          </p>
        </Quote>
        <Quote>
          <p>
            “Success may elude me, but my passion fuels me to live life to the
            fullest and worry not about societal norms.”
          </p>
        </Quote>
        <Quote>
          <p>
            “Creativity fuels the unstoppable train of passion, driving us
            towards our passions and making our ideas a reality.”
          </p>
        </Quote>
      </Flex>
    </AboutWrapper>
  );
};

export default About;
