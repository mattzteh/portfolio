import { motion as m } from "framer-motion";
import { fadeIn } from "../util/animations";

export const homeContent = `I'm a Web Developer with experience in JavaScript, React, jQuery, Python, and Ruby on Rails.
I am currently looking for full time positions as a Software Engineer.`

const p1 = <m.p variants={fadeIn}>Hi, my name is Matthew! I have a passion for web 
development and I love creating and designing websites.</m.p>

const p2 = <m.p variants={fadeIn}>My journey as a Software Engineer began back in 2022, 
when I decided to make a career change from the Business / Finance industry. 
From coding my first "Hello World" program to creating a fully 
fledged website, I have truly rediscovered my love for learning 
and am hungry to constantly learn more and build my skillset.</m.p>

const p3 = <m.p variants={fadeIn}>I am currently looking for opportunities to work as 
a Software Engineer and I am excited to be a part of a team 
that works on meaningful and impactful projects!</m.p>

export const aboutText = [p1, p2, p3];

export const resumeLink = 'https://s3.amazonaws.com/attachments.angel.co/7708341-8612de724f6068cc8cdfd7692de7e2f9.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJS6W3HGZGRJIRBTA%2F20230321%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230321T222901Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=7b501d1a2913fb2bcb36bf31604efb782d74bc7351e27d68dd4043023d554c77';

export const contactP1 = <m.p variants={fadeIn}>I am currently open to any <span>full-time</span>, <span>part-time</span>, 
or <span>freelance</span> roles. If you would like to discuss opportunities, or just want to chat, feel free to send me an 
email and take a look at my <a href={resumeLink} target="_blank" rel="noreferrer">resume.</a> I look forward to hearing from you!
</m.p>
