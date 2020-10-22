Drawing = (function(){
	var canvas,context,animatefn,
			requestFrame = window.requestAnimateFrame ||
										 window.webkitRequestAnimationFrame ||
										 window.mozRequestAnimationFrame ||
										 window.oRequestAnimateFrame ||
										 window.msRequestAnimateFrame ||
										 function(callback){
											window.setTimeout(callback,1000/60);
											};
	return {
		init: function(){
		canvas = document.querySelector('.canvas');
		context = canvas.getContext('2d');
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		},

public class DrawPoint {
	public static void main(String[] args) {
		new MyFrame("drawPoint");
	}
}

class MyFrame extends JFrame{
	ArrayList points = null;

	MyFrame(String s){
		super(s);
		points= new ArrayList();
		setLayout(null);
		setBounds(350,350,400,300);
		this.addMouseListener(new Monitor());
		setVisible(true);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
	}

	public void paint(Graphics g) {
		Iterator i = points.iterator();
		while(i.hasNext()) {
			Point p = (Point)i.next();
			g.setColor(Color.pink);
			g.fillOval(p.x,p.y,10,10);
		}
	}

	public void addPoint(Point p) {
		points.add(p);
	}
}

class Monitor extends MouseAdapter{
	public void mousePressed(MouseEvent e) {
		MyFrame mf = (MyFrame)e.getSource();
		mf.addPoint(new Point(e.getX(),e.getY()));
		mf.repaint();
	}
