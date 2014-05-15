package fontdragr;

import org.apache.commons.fileupload.FileItemIterator;
import org.apache.commons.fileupload.FileItemStream;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;

public class FontListingServlet extends HttpServlet {

    public static final String FOLDER = "fonts";

    private static final long serialVersionUID = -8244073279641189890L;

    @Override
    protected void service(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        try {

            String resource = req.getRequestURI().substring(req.getRequestURI().lastIndexOf('/') + 1);

            if (resource.equals("gallery.json")) {

                File fonts[] = new File(FOLDER).listFiles();

                StringBuffer json = new StringBuffer();

                json.append('[');

                if (fonts != null) {

                    for (File font : fonts) {
                        String size = (font.length() / 1000) + "kb";
                        json.append(" { \"name\": \"" + font.getName().replaceAll("\\W+", "-") + "\", \"url\": \"/gallery/" + font.getName() + "\", \"size\": \"" + size + "\", \"author\": \"\", \"authorurl\": \"\", \"license\": \"\", \"licenseurl\": \"\" },");
                    }

                    int comma = json.lastIndexOf(",");
                    if (comma != -1) {
                        json.deleteCharAt(comma);
                    }

                }

                json.append(" ]");

                res.setContentType("application/json");
                res.getWriter().write(json.toString());

            } else if (resource.equals("deleteAll")) {
            
                File fonts[] = new File(FOLDER).listFiles();
                for (File font : fonts) {
                    font.delete();
                }
   
            } else {

                String name = resource.toLowerCase();
                String type = null;
                if (name.endsWith(".ttf")) {
                    type = "application/x-font-ttf";
                } else if (name.endsWith(".otf")) {
                    type = "application/x-font-opentype";
                } else if (name.endsWith(".woff")) {
                    type = "application/font-woff";
                } else if (name.endsWith(".eot")) {
                    type = "application/vnd.ms-fontobject";
                }
                if (type != null) {
                    res.setContentType(type);
                }

                File font = new File(FOLDER + File.separator + resource);
                FileInputStream inputStream = new FileInputStream(font);
                ServletOutputStream outputStream = res.getOutputStream();

                int read = 0;
                byte[] bytes = new byte[1024];

                while ((read = inputStream.read(bytes)) != -1) {
                    outputStream.write(bytes, 0, read);
                }

                outputStream.close();
                inputStream.close();

            }

        } catch (Exception ex) {
            throw new ServletException(ex);
        }
    }

}
