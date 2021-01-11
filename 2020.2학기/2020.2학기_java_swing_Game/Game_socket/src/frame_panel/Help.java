package frame_panel;

import java.awt.Dimension;
import java.awt.Image;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;

import javax.swing.*;

import tool.ResizeImg;
   
public class Help extends JFrame {
   private JPanel helpPanel;
   private JButton game1, game2, game3, game4, game5, back; // 게임 버튼, 되돌아가기
   private ButtonListener buttonL; 

   
   private JLabel bgLab, catchlab, bottleLab, hunminLab, singerLab, GHLab; 
   private ImageIcon bgimage,catchimg, bottleimg, hunminimg, singerimg, backimage, hoverimage, GHimage;
   private ResizeImg bImg, rImg;
   private Image resizeimg, back1 ;
   private hoverListener hover;
   
   Help(){
      setPreferredSize(new Dimension(700,400));
      setLayout(null);
      setResizable(false);
      setLocation(350, 200); // 이 프레임 크기 설정
      
      
      buttonL = new ButtonListener();
      
      helpPanel = new JPanel();
      helpPanel.setBounds(0, 0, 700, 400);
      helpPanel.setLayout(null); //패널 크기 설정 후 레이아웃 NULL
      
      //event 
      hover = new hoverListener();
      
      //back
      rImg = new ResizeImg("images/helpback.png", 50, 50);
        back1 = rImg.getResizeImage();
        backimage = new ImageIcon(back1); // helpback이미지 리사이징 후 backimage에 이미지 생성
        

      rImg = new ResizeImg("images/hoverback.png", 50, 50);
        back1 = rImg.getResizeImage();
        hoverimage = new ImageIcon(back1);// hoverback이미지 리사이징 후 backimage에 이미지 생성
      //
        
      game1 = new JButton("결합");
      game1.setBounds(250, 55, 200, 50);
      game1.addActionListener(buttonL);
      helpPanel.add(game1); //결합 설명서 보여주게 하는 버튼 생성후 add
      
      game2 = new JButton("병뚜껑");
      game2.setBounds(250, 115, 200, 50);
      game2.addActionListener(buttonL);
      helpPanel.add(game2); //병뚜껑 설명서 보여주게 하는 버튼 생성후 add

      game3 = new JButton("CatchCatch");
      game3.setBounds(250, 175, 200, 50);
      game3.addActionListener(buttonL);
      helpPanel.add(game3); //CatchCatch 설명서 보여주게 하는 버튼 생성후 add
      
      game4 = new JButton("훈민정음");
      game4.setBounds(250, 235, 200, 50);
      game4.addActionListener(buttonL);
      helpPanel.add(game4); //훈민정음 설명서 보여주게 하는 버튼 생성후 add
      
      game5 = new JButton("전국노래자랑");
      game5.setBounds(250, 295, 200, 50);
      game5.addActionListener(buttonL);
      helpPanel.add(game5); //전국노래자랑 설명서 보여주게 하는 버튼 생성후 add
      
      
      back = new JButton("");
      back.setIcon(backimage);
      back.setBounds(590, 290, 50, 50);
      back.addActionListener(buttonL); // 액션Listener추가
      back.setVisible(false);
      back.setBorderPainted(false);
      back.setContentAreaFilled(false);
      back.setFocusPainted(false);       
      back.addMouseListener(hover);
      helpPanel.add(back); // 설명서가 없을때 back버튼 안보이게 설정후 add
      


      bImg = new ResizeImg("images/helpimg.jpg",700,400);
      resizeimg = bImg.getResizeImage();
      bgimage = new ImageIcon(resizeimg); // helpimg리사이징 후 bgimage에 이미지 생성
      bgLab= new JLabel("", bgimage, SwingConstants.CENTER);
      bgLab.setBounds(0, 0, 700, 400);
      helpPanel.add(bgLab);
      

      
      //catch
      catchimg = new ImageIcon("images/helpimg1.png"); //helpimg1가진 ImageIcon생성 
      catchlab = new JLabel("", catchimg, SwingConstants.CENTER); // helpimg1가진 JLabel생성
      catchlab.setBounds(0, 0, 700, 400); //크기 설정
      catchlab.setVisible(false); // 클릭 전에 보이지 않게 하기
      helpPanel.add(catchlab); // add
            
      //bottle
      bottleimg = new ImageIcon("images/helpimg2.png"); //helpimg2가진 ImageIcon생성
      bottleLab = new JLabel("", bottleimg, SwingConstants.CENTER); // helpimg2가진 JLabel생성
      bottleLab.setBounds(0, 0, 700, 400); // 크기 설정
      bottleLab.setVisible(false); // 클릭 전에 보이지 않게 하기
       helpPanel.add(bottleLab); //add
            
      //hunmin
      hunminimg = new ImageIcon("images/helpimg3.png");// helpimg3가진 ImageIcon생성
      hunminLab = new JLabel("", hunminimg, SwingConstants.CENTER);// helpimg3가진 JLabel생성
      hunminLab.setBounds(0, 0, 700, 400);//크기 설정
      hunminLab.setVisible(false);//클릭 전에 보이지 않게 하기
      helpPanel.add(hunminLab);//add
            
      //game.singer
      singerimg = new ImageIcon("images/helpimg4.png");// helpimg4가진 ImageIcon생성
      singerLab = new JLabel("", singerimg, SwingConstants.CENTER);// helpimg4가진 JLabel생성
      singerLab.setBounds(0, 0, 700, 400); // 크기 설정
      singerLab.setVisible(false); // 클릭전에 보이지 않게 하기
      helpPanel.add(singerLab);//add
            
      //GH
      GHimage = new ImageIcon("images/helpimg5.png");// helpimg5가진 ImageIcon생성
      GHLab = new JLabel("", GHimage, SwingConstants.CENTER); // helpimg5가진 JLabel생성
      GHLab.setBounds(-15, -10, 700, 400); // 크기 위치 설정
      GHLab.setVisible(false);//클릭 전에 보이지 않게 하기
      helpPanel.add(GHLab);//add
      
      
            
      getContentPane().add(helpPanel);
      pack();
      setVisible(true);
   }
   

   
   
   private class ButtonListener implements ActionListener{

      @Override
      public void actionPerformed(ActionEvent event) {
         Object object = event.getSource();
         if(object == game1||object == game2||object==game3||object==game4||object==game5) {
            game1.setVisible(false);
            game2.setVisible(false);
            game3.setVisible(false);
            game4.setVisible(false);
            game5.setVisible(false);
            back.setVisible(true);
         }//게임설명버튼 누르면 버튼들 안보이게 한 후 back 활성화
         if(object == game1) {
            bgLab.setVisible(false); // 배경이미지 안보이게 하기
            GHLab.setVisible(true); // 결합 설명서 띄우기
         }
         else if(object == game2) {
            bgLab.setVisible(false); // 배경이미지 안보이게 하기
            bottleLab.setVisible(true); // bottleLab설명서 띄우기
         }
         else if(object == game3) {
            bgLab.setVisible(false); // 배경이미지 안보이게 하기
            catchlab.setVisible(true);// CatchCatch설명서 띄우기
         }
         else if(object == game4) {
            bgLab.setVisible(false); // 배경이미지 안보이게 하기
            hunminLab.setVisible(true);// 훈민정음 설명서 띄우기
         }
         else if(object == game5) {
            bgLab.setVisible(false); // 배경이미지 안보이게 하기
            singerLab.setVisible(true);//전국 노래자랑 설명서 띄우기
         }
         else if(object == back) {
            game1.setVisible(true);
            game2.setVisible(true);
            game3.setVisible(true);
            game4.setVisible(true);
            game5.setVisible(true);
            back.setVisible(false);
            
            GHLab.setVisible(false);
            catchlab.setVisible(false);
            bottleLab.setVisible(false);
            hunminLab.setVisible(false);
            singerLab.setVisible(false);
            

            bgLab.setVisible(true);
         }// 뒤돌아가기 하면 버튼 다시 활성화 후 설명서들 비활성화 시키고, 배경이미지 활성화
      }
   }
   
   
   private class hoverListener implements MouseListener {

         @Override
         public void mouseEntered(MouseEvent e) {
            Object obj = e.getSource();
            if (obj == back) {
               back.setIcon(hoverimage);
               back.setBorderPainted(false);
               back.setContentAreaFilled(false);
                 back.setFocusPainted(false);
            }//마우스 들어가면 back이미지 바꾸기
            
         }

         @Override
         public void mouseExited(MouseEvent e) {
            Object obj = e.getSource();
            if (obj == back) {
               back.setIcon(backimage);
               back.setBorderPainted(false);
               back.setContentAreaFilled(false);
               back.setFocusPainted(false);

            }//마우스 나오면 back이미지 바꾸기
            
         }
         
         @Override
         public void mouseClicked(MouseEvent e) {}
         
         @Override
         public void mousePressed(MouseEvent e) {}

         @Override
         public void mouseReleased(MouseEvent e) {}
          
       }
   
}