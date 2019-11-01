import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    color: theme.palette.text.primary,
  },
});


function Overview(props) {
  const { classes } = props;

  return (
    <Container className={classes.root}>
      <Typography variant="h4" component="h1">Overview del curso</Typography>
        <p>Antes que nada, muchas gracias por el interés, realmente es algo que tenía ganas de hacer hace mucho.</p>
        <p>
        Desde su lado obviamente van a aprender, pero desde el lado del que enseña también es beneficioso porque enseñando es cómo uno retiene más la información, y además necesito investigar mucho para darles información correcta, lo que me hace mejor profesional.</p>

        <p>Habiéndoles dicho esto, este curso es muy a pulmón y puedo equivocarme. Si es así, les pido a quienes se den cuenta de algún error que vayan al canal adecuado, que en este caso sería clase-1 y me corrijan.</p>

        <p>Con respecto a la audiencia del curso, realmente lo voy a dar para gente que nunca escribió una línea de código en su vida. Los ejercicios que hay son de MusesCodeJS que es una meetup que hay acá en Australia principalmente para mujeres que quieren empezar a programar. Con esta metodología he visto a gente que ni siquiera tiene computadora en su día a día salir sabiendo definir funciones, así que estoy seguro que nos va a funcionar. Esta primer clase seguramente sea un poquito más larga que las demás porque vamos a configurar un editor de texto y hablar de programación en general.</p>

        <p>En cuanto a la modalidad del curso, es online, onda webinar (que significa seminario web) los videos quedan guardados en Twitch por 15 días, pero voy a ver cómo hago para pasarlos a youtube.</p>

        <p>Mi idea es ir haciendo los ejercicios con los que estén online para poder resolver dudas en el momento. A veces cuando uno lleva varios años programando le pasa que no piensa de la misma manera que alguien que recién arranca y está bueno poder aclarar conceptos donde yo pienso que estoy siendo súper claro pero resulta que no es así.</p>

        <p>Algo para tener en cuenta es que hay un poquito de delay entre lo que voy dando y cuando llega a twitch -- unos 2 o 3 segundos, así que voy a hacer algunos parates en el medio para ver que estemos avanzando lo más juntos que se pueda.</p>

        <p>Una cosa en la que quiero hacer hincapié es en la 'Seguridad Psicológica', que dicho en criollo significa que no hay preguntas boludas, si no lo entendieron, me preguntan y volvemos a hablar sobre ese tópico. Hay unas 200 personas registradas así que seguramente si uno no lo entendió, hay más que no lo entendieron, y si no me avisan no lo puedo corregir.</p>

        <p>Algunas recomendaciones generales para el curso:</p>

        <ol>
          <li>Prepárense para equivocarse, prepárense para frustrarse. Si fuera súper sencillo muchos de ustedes no estarían acá. También tengan en cuenta que un día se matan intentando resolver un problema y no lo pueden sacar, en cuanto lo dejan, su subconsciente va a seguir trabajando en ese problema y capaz mientras están haciendo cualquier otra cosa como bañándose o cocinando se les va a ocurrir una idea para resolver el problema que tienen.</li>
          <li>El éxito que tengan en este curso y creo yo, en cualquier cosa que se propongan hacer va a estar atado a cuán perseverantes sean. En otras palabras, si practican todos los días les va a ir bien, si lo tocan 1 vez por mes, les va a ir mal. Y hago una especial aclaración a que practicar es extremadamente importante. Solamente leer acerca de programación no es suficiente, hay que sentarse e intentar llevar la teoría a la práctica.</li>
          <li>Siguiendo la temática del "No hay preguntas boludas", si ven que alguien hace una pregunta que a ustedes les parece muy básica, tómense un momento para contestarla lo mejor que puedan, no hagan sentir mal al otro porque si no esa persona va a dejar de preguntar y en ese caso todos nos perdemos de aprender algo o reforzar algo que ya sabíamos.</li>

          <li>Si son vagos, tienen un talento natural para la programación. Los mejores programadores son vagos. Programación es acerca de automatizar tareas, de hacer las cosas 1 vez para no tener que hacerlas nunca más. Así que si son vagos, usen su vagancia para el bien y les va a ir excelente.</li>
        </ol>

        <p> 
        Otra cosa que me interesa dejarles con este curso es una apreciación por las buenas prácticas de programación. Yo soy un hincha pelotas con este tema porque muchas veces se encuentran con programadores mediocres en su vida laboral, y con un poquito más de esfuerzo hubiesen sido buenos, así que si ustedes van a ser la próxima camada de desarrolladores, espero poder dejarles algunas cosas que realmente marcaron una diferencia en mi carrera profesional, cosas que parecen no tener importancia pero que son en realidad extremadamente importantes, como por ejemplo:</p>

        <ul>
        <li>Nombrar bien las variables y las funciones (una de las cosas más difíciles de programar es ponerle nombres adecuados a las cosas, pero es importante para que el código se explique solo, este concepto lo vamos a tener muy presente durante todo el curso así que si no lo entienden ahora no se hagan problema porque se los voy a recordar todo el tiempo)</li>
        <li>Cuando empecemos a usar Git y GitHub, que son herramientas para mantener un log o una bitácora de cambios que vamos haciendo en el código, vamos a hacer hincapié en escribir bien los mensajes que describen qué cambios se hicieron al código y les voy a dar ejemplos buenos y malos.</li>
        <li>Cuando empecemos a escribir código un poco más complejo, vamos a empezar a escribir pruebas unitarias para nuestro código. Esto es algo que en muchas empresas hoy en día no se hace por, según dicen, la falta de tiempo, pero es realmente una boludés pensar así, porque el tiempo que no gastás hoy en escribir pruebas lo vas a gastar el doble en resolver problemas no intencionales que va a tener tu software.
        * En el libro "Clean Code" o código limpio de Robert Martin también conocido como el Tío Bob o Uncle Bob, se habla de la importancia de escribir código limpio. La razón es que nosotros pasamos mucho más tiempo leyendo código que escribiendo código, por lo que es importante que las pocas veces que escribamos código, sea lo más legible posible, ya que lo vamos a leer muchas veces en el futuro. A todo programmer profesional le ha pasado que volvió a su código después de 1 o más años y no tiene idea de qué es lo que quiso hacer. Una solución común a este problema es escribir comentarios para todo lo que uno hace. Pero como vamos a ver en este curso, hacer eso a veces trae consecuencias negativas. La mejor solución es acostumbrarse a leer código, escribir código limpio, y usar comentarios sólo cuando son necesarios. Quizás al principio uno abuse de escribir comentarios y esto está bien, pero a medida que vayamos avanzando en el curso nos vamos a poner un poco más estrictos con ese tema.</li>
        </ul>

        <p>También vamos a aprender 3 skills fundamentales:</p>

        <ul>
        <li>Aprender a leer e interpretar errores</li>
        <li>Aprendar a leer documentación</li>
        <li>Aprender a googlear. Google es la herramienta #1 de los programadores. Nadie se puede acordar todo de memoria, así que lo que hacemos es aprender los conceptos y después buscamos lo que no nos acordamos en google.</li>
        </ul>

        <p>Con respecto al temario que vamos a ver, vamos a arrancar con JavaScript, que es el lenguaje más popular del momento. En el canal #faq dejé el link a la encuesta que hizo el sitio Stack Overflow si la quieren ver, está en inglés.</p>

        <p>Sin embargo quiero aclararles que no es que yo piense que JavaScript es el mejor lenguaje del mundo y los demás son una cagada... la realidad es que los lenguajes de programación son una herramienta. Lo que yo les voy a enseñar a hacer en este curso es a entender a programar porque los conceptos básicos e intermedios son los mismos en casi cualquier lenguaje de programación.</p>

        <p>A medida que vayamos viendo JavaScript vamos a dar un poco una introducción a HTML y CSS según sea necesario. HTML y CSS son más sencillos de digerir que JavaScript porque en su forma más básica no tienen lógica, son simplemente declaraciones. Con HTML podemos decir "esto es un párrafo," con CSS podemos decir "esto es rojo". Con JavaScript podemos unir todo eso y decir este párrafo va a ser rojo si el cliente no pagó, o verde si el cliente está al día.</p>

        <p>Vamos a empezar con Frontend porque es lo que tiene más impacto porque uno ve los cambios más fácilmente y eso a uno lo motiva, y cuando uno está motivado es más fácil continuar.</p>

        <p>No vamos a ver frameworks de frontend como jQuery, React o Vue.JS al principio, vamos a hacer todo en VanillaJS que es como se llama a JavaScript sin ningún tipo de librería más allá de las estándares. La razón de hacer esto es que yo necesito que entiendan qué problemas resuelven los frameworks antes de empezar a usarlos a ciegas.</p>

        <p>En el medio vamos a empezar a ver un poquito de backend, que es donde está la lógica de negocio de las aplicaciones y cómo se comunican el frontend y el backend, a través de APIs, que significa Application Programming Interface.</p>

        <p>En este momento también voy a ir un poco más a lo teórico y vamos a discutir qué es un cliente, un servidor, el orden en que se ejecutan las cosas y el rol del protocolo HTTP (HyperText Transfer Protocol), protocolo de transferencia de hypertexto.</p>

        <p>Esto se los comento para que tengan una idea de hacia dónde va el curso pero si no entienden de lo que estoy hablando, es completamente normal, no esperaba que se entendiera en la clase 1, así que no se desmotiven ni se hagan problema. Pero quizás revean este video en unos meses y tómenlo como evaluación de cuánto más saben que el día que empezaron.</p>

        <p>Cuando veamos backend vamos a querer guardar nuestra información. Para guardar nuestra información vamos a necesitar una base de datos, así que vamos a usar MySQL que es gratuita y vamos a aprender a hacer que JavaScript y MySQL se comuniquen.</p>

        <p>En algún momento en el medio de todo eso vamos a aprender a usar librerías de javascript, y acá quiero hacer una diferencia entre librería y framework, en que en el sentido más puro de la palabra, una librería resuelve un problema puntual, y un framework define una forma de trabajar. Esto lo vamos a ver en detalle más adelante así que por ahora no se hagan problema.</p>

        <p>Finalmente, vamos a ver si podemos hacer que todo esto se junte con Docker que es para tener máquinas virtuales corriendo en nuestra máquina física.</p>

        <p>Una vez que hayamos visto JavaScript tanto para el frontend como el backend, HTML, CSS y MySQL, orquestado con Docker y junto con los conceptos de testing van a ser unos muy buenos juniors.</p>


        <h2>Breve Introducción a programación</h2>

        <p>Bueno ahora más o menos sabemos de qué vamos a hablar el resto del curso, empecemos un poco con qué es programar, para qué programamos, etc.</p>

        <p>La programación en su definición más simple es decirle a una máquina qué tiene que hacer. Y su aplicación más normal es para resolver un problema.
        </p>

        <p>La característica más importante de un programador es entender cuál es el problema, pensar una solución, y luego escribir código que exprese esa solución de una manera que la máquina la entienda.</p>

        <p>Un error muy común es empezar a escribir código MIENTRAS uno piensa el problema.</p>

        <p>Vuelvo a repetir: Primero uno tiene que saber cuál es el problema que está intentando resolver, luego pensar una solución a ese problema, y luego expresar esa solución escribiendo código.</p>

        <p>Vamos a ver una técnica sencilla cuando hagamos esto en la parte práctica, y eso es escribir pseudocódigo. Pseudocódigo significa que no lo escribimos como el lenguaje coloquial de todos los días, si no de una manera que parezca código pero que no adhiera con la sintaxis del lenguaje en sí.</p>

        <p>{`// si usuarioLogueado entonces:`}</p>

        <p>Y acá hago un parate para profundizar en la sintaxis de un lenguaje de programación. La sintaxis, dicho de otra manera, es la forma o las reglas que uno tiene que seguir para que la máquina entienda lo que queremos decir. Las máquinas no tienen inteligencia como nosotros, por lo que no pueden interpretar nuestros errores. Es por eso que a veces van a ver que olvidarse un mínimo carácter hace que todo el programa deje de funcionar. Les voy a mostrar ejemplos en la práctica.
        </p>

        <h2>Práctica</h2>

        <ul>
        <li>Vista básica de Slack</li>
        <li>Abrir un proyecto con editor de texto</li>
        <li>Abrir nivel1.js en el editor de texto (vamos a ver cómo se conecta todo en la clase 2)</li>
        <li>Abrir index.html en el navegador</li>
        <li>Abrir la consola y probar que funcione todo bien</li>
        <li>Modificar archivo nivel1.js y recargar el navegador</li>
        <li>Ejemplos de comentarios inservibles</li>
        <li>Ejemplos de errores</li>
        <li>Ir resolviendo los problemas 1 a 1 y mostrar un poco de pseudocódigo</li>
        <li>Ejemplos de sintaxis (ej "hola-mundo" vs hola-mundo)</li>
        </ul>

    </Container>
  );
}

export default withStyles(styles)(Overview);
