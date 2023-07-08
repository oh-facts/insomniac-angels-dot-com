import earth1 from '../assets/earth1.jpg'


const About = () => {
  return (
    <div className='about'>
      <img src={earth1} alt='banner' />

      <div className="textbox">
        <h1>Lorem Ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies sapien non turpis
          suscipit, eu cursus enim laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia Curae; Cras vel tortor a felis interdum eleifend. Donec consectetur
          placerat nisi auctor aliquet. Fusce lobortis, nisi ac suscipit consequat, nisl elit molestie
          turpis, vitae luctus felis ex a ligula. Curabitur eu enim dui. Nunc lacinia diam a lacus
          posuere, nec blandit elit vestibulum. Proin tincidunt, lorem eu convallis semper, purus felis
          porta ligula, ac bibendum turpis urna id ipsum.
        </p>
        <p>
          Duis fringilla, mauris eget vestibulum sollicitudin, dui dolor pretium nisi, vitae lacinia
          lectus ipsum at ante. Vestibulum eu gravida mauris. Maecenas vitae massa felis. Nam vel ipsum
          a metus tempus varius nec vitae velit. Etiam pretium, ipsum at rhoncus finibus, diam nisl
          aliquam leo, nec scelerisque dui ex vitae justo. Nunc sit amet bibendum risus. In ac semper
          nisi. Nullam dapibus lacus eu odio tincidunt, in faucibus arcu semper. Sed blandit orci vel
          ante luctus venenatis. Nam semper bibendum est, id convallis dui tempor eu.
        </p>
      </div>
    </div>

  );
}

export default About;